import am from '../../img/armenia.svg';
import ua from '../../img/ukraine.svg';
import ge from '../../img/georgia.svg';
import md from '../../img/moldova.svg';
import by from '../../img/belarus.svg';
import bg from '../../img/bulgaria.svg';
import { routes } from '../../constants/routes/routes';

export const headerConfig = {
  tabs: [
    {
      tabName: 'Про Нас',
      to: routes.about
    },
    {
      tabName: 'Проект',
      to: routes.project
    },
    {
      tabName: 'Організації',
      to: routes.organisations
    },
    {
      tabName: 'Важливі Ділянки',
      to: routes.places
    },
    {
      tabName: 'Контакти',
      to: routes.contacts
    },
  ],
  langDropdown: [
    {
      shortcut: 'UA',
      imgSrc: ua
    },
    {
      shortcut: 'AM',
      imgSrc: am,
    },
    {
      shortcut: 'GE',
      imgSrc: ge
    },
    {
      shortcut: 'MD',
      imgSrc: md
    },
    {
      shortcut: 'BY',
      imgSrc: by,
    },
    {
      shortcut: 'BG',
      imgSrc: bg
    }
  ]
}