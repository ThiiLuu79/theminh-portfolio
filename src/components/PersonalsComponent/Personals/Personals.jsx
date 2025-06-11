import Card from '../../ReusableComponents/Card/Card';
import cover from "../../../img/personal/html.jpg";
import tititea from "../../../img/personal/tititea.jpg";
import cookinglab from "../../../img/personal/cookingLab.png";
import tododue from "../../../img/personal/tododue.png";
import lesserafim from "../../../img/personal/lesserafim.png";

import Button from "../../ReusableComponents/Button/Button";
import PageItem from "../../ReusableComponents/PageItem/PageItem";

import { useLanguage } from '../../ReusableComponents/LanguageToggler/LanguageContext';

import * as personnalsConstantsEn from '../../../i18n/personalsConstants_en';
import * as personnalsConstantsFr from '../../../i18n/personalsConstants_fr';

const Personals = () => {

    const { language } = useLanguage();
    const personnalsConstants = language === 'en' ? personnalsConstantsEn : personnalsConstantsFr;

    return (
        <div>
            <Card
                intro = {personnalsConstants.PERSONALS_WELCOME}
                title = {personnalsConstants.PERSONALS_PROJECT}
                subtitle = {personnalsConstants.PERSONALS_PROJECT}
                image = {cover}
            />

            <div>

                <PageItem
                    title= {personnalsConstants.COOKINGLAB_PROJECT.title}
                    period= {personnalsConstants.COOKINGLAB_PROJECT.period}
                    description= {personnalsConstants.COOKINGLAB_PROJECT.description}
                    contributions= {personnalsConstants.COOKINGLAB_PROJECT.contributions}
                    tools= {personnalsConstants.COOKINGLAB_PROJECT.tools}
                    image={cookinglab}
                    imgAlt={personnalsConstants.COOKINGLAB_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://cooking-lab.netlify.app/' blank={true} noreferrer={true} buttonType='Link'/>,
                        <Button key="button2" text={personnalsConstants.GITHUB_LINK} redirect='https://github.com/CookingLab' blank={true} noreferrer={true} buttonType='Link'/>
                    ]}
                />

                <PageItem
                    title= {personnalsConstants.TODODUE_PROJECT.title}
                    period= {personnalsConstants.TODODUE_PROJECT.period}
                    description= {personnalsConstants.TODODUE_PROJECT.description}
                    contributions= {personnalsConstants.TODODUE_PROJECT.contributions}
                    tools= {personnalsConstants.TODODUE_PROJECT.tools}
                    image={tododue}
                    imgAlt={personnalsConstants.TODODUE_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://tododue.netlify.app/' blank={true} noreferrer={true} buttonType='Link'/>,
                        <Button key="button2" text={personnalsConstants.GITHUB_REPO} redirect='https://github.com/ThiiLuu79/tododue' blank={true} noreferrer={true} buttonType='Link'/>
                    ]}
                />

                <PageItem
                    title= {personnalsConstants.LESSERAFIM_PROJECT.title}
                    period= {personnalsConstants.LESSERAFIM_PROJECT.period}
                    description= {personnalsConstants.LESSERAFIM_PROJECT.description}
                    contributions= {personnalsConstants.LESSERAFIM_PROJECT.contributions}
                    tools= {personnalsConstants.LESSERAFIM_PROJECT.tools}
                    image={lesserafim}
                    imgAlt={personnalsConstants.LESSERAFIM_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://lesserafim-page.netlify.app/' blank={true} noreferrer={true} buttonType='Link'/>,
                        <Button key="button2" text={personnalsConstants.GH_BE} redirect='https://github.com/ThiiLuu79/lesserafim-page-api' blank={true} noreferrer={true} buttonType='Link'/>,
                        <Button key="button3" text={personnalsConstants.GH_FE} redirect='https://github.com/ThiiLuu79/lesserafim-page' blank={true} noreferrer={true} buttonType='Link'/>
                    ]}
                />
                
                <PageItem
                    title={personnalsConstants.TITITEA_PROJECT.title}
                    period={personnalsConstants.TITITEA_PROJECT.period}
                    description= {personnalsConstants.TITITEA_PROJECT.description}
                    contributions={personnalsConstants.TITITEA_PROJECT.contributions}
                    tools= {personnalsConstants.TITITEA_PROJECT.tools}
                    image={tititea}
                    imgAlt={personnalsConstants.TITITEA_PROJECT.imgAlt}
                    buttons={[<Button key="button1" text={personnalsConstants.VISIT} redirect='https://tititea.netlify.app' blank={true} noreferrer={true} buttonType='Link'/>]}
                />
            </div>
        </div>
    )
}
export default Personals
