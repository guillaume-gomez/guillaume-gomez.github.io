import React, { useState, useMemo, useEffect } from 'react';
import { uniq, orderBy } from "lodash";
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "framer-motion";
import { projectsData } from "../constants";

import FromLeftToRight from "../components/animations/FromLeftToRight";
import FadeInWhenVisible from "../components/animations/FadeInWhenVisible";
import ProjectsGrid from "../components/ProjectsGrid";
import SectionHeader from "../components/SectionHeader";
import CustomButton from "../components/CustomButton";

import "./Projects.css";

interface ProjectInterface {
  refTarget: React.RefObject<HTMLSpanElement>
}

const stepProjects = 8;

function Projects({refTarget} : ProjectInterface) {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [filter, setFilter] = useState<string>("");
  const [itemsLoaded, setItemLoaded] = useState<number>(stepProjects);
  const [theme, setTheme] = useState<string>("");

  const projectsDataFiltered = useMemo(() => {
    const projectDataByRelevance = orderBy(projectsData, ["relevance"], ['desc']);
    if(theme === "" && filter === "") {
      return projectDataByRelevance;
    }
    if(theme === "" && filter !== "") {
      return projectDataByRelevance.filter(data => data.tags.includes(filter));
    }
   
    const dataByTheme = projectDataByRelevance.filter(data => data.theme === theme);
    if(theme !== "" && filter === "") {
      return dataByTheme;
    }
    // if theme !== "" && filter !== ""
    return dataByTheme.filter(data => data.tags.includes(filter))
  }, [filter, theme]);

  const tags = useMemo(
      () => uniq(projectsData
        .reduce<string[]>((acc, curValue) => [...acc, ...curValue.tags], []))
  , []);

  const themes = useMemo(() => uniq(projectsData.map(data => data.theme)),[]);

  useEffect(() => {
    const itemsLoaded = Math.min(projectsDataFiltered.length, stepProjects);
    setItemLoaded(itemsLoaded);
    controls.start("scaleUp");
  }, [projectsDataFiltered, controls]);

  function loadMore() {
    const itemsToAdd = Math.min(projectsDataFiltered.length - itemsLoaded, stepProjects);
    setItemLoaded(itemsLoaded + itemsToAdd);
    controls.start("scaleUp");
  }

  function onChangeTheme(theme: string) {
    setTheme(theme);
    //remove selected filter
    setFilter("")
  }

  function renderHeader() {
    return (
      <div className="card w-full bg-primary shadow-xl">
        <div className="card-body">
          <ul className="tabs tabs-boxed overflow-x-auto flex-nowrap">
            <FromLeftToRight
              key={"all"}
              onClick={() => onChangeTheme("")}
              className={theme === "" ? "tab tab-lg tab-active" : "tab tab-lg"}
            >
              <button>
                {t("projects.theme.all")}
              </button>
            </FromLeftToRight>
            {
              orderBy(themes).map((_theme, index) => 
                <FromLeftToRight
                  key={_theme}
                  onClick={() => onChangeTheme(_theme)}
                  className={theme === _theme ? "tab tab-lg tab-active" : "tab tab-lg"}
                >
                  <button>
                    {t(`projects.theme.${_theme}`)}
                  </button>
                </FromLeftToRight>
              )
            }
          </ul>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-2 items-center">
              <span className="font-semibold">Tags</span>
              <select className="select select-bordered w-full max-w-xs" onChange={(e) => setFilter(e.target.value)} value={filter}>
                <option value="" key="no-value">{t("projects.no-filter")}</option>
                {orderBy(tags).map(tag => <option className="custom-option" key={tag}>{tag}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <motion.div className="font-bold"
                  animate={controls}
                  initial="idle"
                  variants={ {
                    idle: {  scale: 1 },
                    scaleUp: { scale: [1.1, 1.2, 1.3, 1.5, 1.3, 1.2, 1.1, 1.0] },
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}>
                <strong>
                  {` ${itemsLoaded} / ${projectsDataFiltered.length}`}
                </strong>
                </motion.div>
                <span className="font-semibold">{t("projects.projects")}</span>
            </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="project" className="flex flex-col gap-4">
      <SectionHeader text={t("projects.projects")} />
      {renderHeader()}
      <FadeInWhenVisible>
        <ProjectsGrid projectsData={projectsDataFiltered} itemsLoaded={itemsLoaded} />
      </FadeInWhenVisible>
      {
        // buttons
        itemsLoaded < projectsDataFiltered.length ?
        <div className="self-center">
          <CustomButton
            onClick={loadMore}
            >
              {t("projects.load-more")}
          </CustomButton>
        </div>
        :
        null
      }
    </section>
    
  );
}

export default Projects;