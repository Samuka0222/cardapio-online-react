interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
      <main className="px-7 md:px-1 lg:px-20 xl:px-48 2xl:px-80 bg-bg flex flex-col ">
        {children}
      </main>
  )
}