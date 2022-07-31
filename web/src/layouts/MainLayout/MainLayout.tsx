import NavCell from 'src/components/NavCell'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <NavCell />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
