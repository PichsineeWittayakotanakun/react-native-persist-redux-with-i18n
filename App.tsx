import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import i18next from './localization/i18n';
import { saveLanguage } from './src/redux/userSlice';
import { useAppDispatch, useAppSelector } from './src/redux/hook';
import i18next from 'i18next';

const App = () => {

  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const selectedLanguage = useAppSelector(state => state.user.language);

  //TODO : apply code like this to navigation stack which will render before any screen showup
  useEffect(()=>{

    i18next.changeLanguage(selectedLanguage);

  },[selectedLanguage]);


  const setLang = ( lang : 'th' | 'en')=>{
    i18next.changeLanguage(lang);
    dispatch(saveLanguage(lang));
  };

  const onChangeLanguage = ()=>{
    setLang(i18n.language === 'en' ? 'th' : 'en');
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
