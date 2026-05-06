export const metadata = {
title: 'Elina Story',
description: 'A story made for one person',
};

export default function RootLayout({ children }) {
return ( <html lang="ru">
<body style={{ margin: 0 }}>
{children} </body> </html>
);
}
