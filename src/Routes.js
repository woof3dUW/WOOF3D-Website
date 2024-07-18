import {BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { OfficersPage } from "./pages/OfficersPage";
import { OfficeHoursPage } from "./pages/OfficeHoursPage";
import { FilamentPage } from "./pages/FilamentPage";
import { ErrorPage } from "./pages/ErrorPage";
import { VolcanoesPage } from './pages/VolcanoesPage';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
                <Route path="/projects/volcanoes" element={<VolcanoesPage/>}/>
                <Route path="/officers" element={<OfficersPage/>}/>
                <Route path="/officehours" element={<OfficeHoursPage/>}/>
                <Route path="/filament" element={<FilamentPage/>}/>
                <Route element={<ErrorPage/>}/>
            </Switch>
        </BrowserRouter>
    );
}