import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from './localization/i18n';

const App = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = ()=>{
    if(i18n.language === 'en'){
      i18next.changeLanguage('th');
    }else {
      i18next.changeLanguage('en');
    }
  };
  return (

      <SafeAreaView style={styles.container}>
        <View style={styles.viewContainer}>
        <Text style={styles.text}>{`${t('current_lang')}: ${t('lang')}`}</Text>
        <TouchableOpacity style={styles.buttonContianer} onPress={()=> onChangeLanguage()} ><Text style={styles.buttonText}>{t('change_lang')}</Text></TouchableOpacity>
        </View>
      </SafeAreaView>

  );
};

export default App;

const styles = StyleSheet.create({
container : { flex : 1},
text:{ textAlign:'center', fontSize:24},
viewContainer: { flex:1, alignItems:'center', justifyContent:'center', rowGap:32},
buttonContianer:{ padding:16, alignSelf:'center', backgroundColor:'green', borderRadius:8},
buttonText:{ color:'white'},
});
