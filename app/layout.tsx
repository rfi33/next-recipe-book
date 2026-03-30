import './globals.css' 

export const metadata = {
  title: 'Recipe Book',
  description: 'Browse and search your favourite recipes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}