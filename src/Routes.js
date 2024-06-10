import {BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { OfficersPage } from "./pages/OfficersPage";
import { OfficeHoursPage } from "./pages/OfficeHoursPage";
import { MemberResourcesPage } from "./pages/MemberResourcesPage";
import { ErrorPage } from "./pages/ErrorPage";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/officers" element={<OfficersPage/>}/>
                <Route path="/officehours" element={<OfficeHoursPage/>}/>
                <Route path="/resources" element={<MemberResourcesPage/>}/>
                <Route element={<ErrorPage/>}/>
            </Switch>
        </BrowserRouter>
    );
}