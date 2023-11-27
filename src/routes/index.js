import { /* Navigate, Outlet, */ Route, Routes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/main' element={<Main />} />
            {/* 
                <Route element={<ProtectedRoutes redirectTo='/' />}>
                    <Route path='/main' element={<Main />} />
                </Route> 
            */}
        </Routes>
    )
}

export default MainRoutes;