import IconHome from '../../assets/home.png';

export const MenuItem = [
  { codeId: 0, name: "Dashboard", label: "Dashboard", link:'/dashboard', icon: IconHome },
  { codeId: 1, name: "Dados do licenciado", label: "Dados do licenciado", link:'/dados-do-licenciado', icon: null },
  { codeId: 2, name: "Menu de cadastro", label: "Cadastro-menu", link:'/cadastro-menu', icon: null },
  { codeId: 3, name: "Menu com submenu", label: "menu com submenu", icon: null, submenu: [
    {codeId: 0, name:'Teste', link:'/teste'},
    {codeId: 1, name:'Teste 2', link:'/teste-2'}
  ] },
];
