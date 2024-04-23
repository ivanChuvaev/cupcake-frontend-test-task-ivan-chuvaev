import { PropsWithChildren } from 'react'
import './MainLayout.scss';
import { Outlet } from 'react-router';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className='MainLayout'>
      {children ?? <Outlet />}
    </div>
  )
}
