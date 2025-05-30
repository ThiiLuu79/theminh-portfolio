import academics from "../../../img/home/academic.jpg";
import cookingLabCover from "../../../img/home/cookingLabCover.png";

import ScrollToTopOnLoad from "../../MainComponents/ScrollToTopOnLoad/ScrollToTopOnLoad";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as homeConstantsEn from '../../../i18n/homeConstants_en';
import * as homeConstantsFr from '../../../i18n/homeConstants_fr';
import ProjectLink from "../../ReusableComponents/ProjectLink/ProjectLink";

const CSProjects = () => {

    ScrollToTopOnLoad();
    const { language } = useLanguage();
    const homeConstants = language === 'en' ? homeConstantsEn : homeConstantsFr;

    return (
        <section className = "my-projects" id = "cs_projects">
            <h2 className = "section__title section__title--projects" data-aos="fade-right">{homeConstants.CS_PROJECTS_TITLE}</h2>
            <p className = "section__subtitle section__subtitle--projects" data-aos="fade-right">{homeConstants.CS_PROJECTS_SUBTITLE}</p>

            <div className = "portfolio" data-aos="fade-up">
                <ProjectLink
                    redirect="/Personals"
                    image={cookingLabCover}
                    alt="personal_project cover"
                    text={homeConstants.PERSONAL_PROJECTS}
                />
                <ProjectLink
                    redirect="/Academics"
                    image={academics}
                    alt="academic_project_cover"
                    text={homeConstants.ACADEMIC_PROJECTS}
                />
            </div>

        </section>
    )
}
export default CSProjects
