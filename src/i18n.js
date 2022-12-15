import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18next 
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'ru',
    resources: {
      ru:{
        translation: {
          about: 'О портале',
          about_description: 'Этот портал имеет информацию о писателях Беларуси. На ведущей страничке расположена информация о писателе дня. Еще портал имеет индивидуальную страничку для каждого писателя с описанием деятеля: автобиография, фотогалерея с его изображениями и изображениями его произведений, видео на YouTube, место его рождения на карте.',
          navB_List: 'Список',
          navB_Main: 'Главная',
          day_author: 'Деятель дня',
          inform:'ИНФОРМАЦИЯ',
          wsearch: 'Поиск писателей портала',
          wsearch_hint: 'Имя автора',
          bio: 'Биография',
          gallery: 'Галерея',
          video: 'Видео',
          place_of_birth: 'Место рождения'
        }
      },
      en:{
        translation: {
          about: 'About this webpage',
          about_description: 'This portal has information about writers of Belarus. The leading page contains information about the writer of the day. The portal also has an individual page for each writer with a description of the figure: an autobiography, a photo gallery with his images and images of his works, videos on YouTube, his place of birth on the map.',
          navB_List: 'List',
          navB_Main: 'Home',
          day_author: 'Figure of the day',
          inform:'INFORMATION',
          wsearch: 'Writers search',
          wsearch_hint: 'Author name',
          bio: 'Biography',
          gallery: 'Gallery',
          video: 'Video',
          place_of_birth: 'Place of birth'
        }
      }
    }
  })