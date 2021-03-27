import React from 'react';
import { useTranslation } from 'react-i18next';
import "./Trello.scss";

function Trello() {
  const { t } = useTranslation();

  function addCard() {
    return <footer>{t("trello.add-card")}</footer>
  }


  return (
  <div className="trello-ui">
    <nav className="trello-navbar trello-app">{t("trello.trello-title")}</nav>
    <nav className="trello-navbar trello-board">{t("trello.trello-board")}</nav>
    <div className="trello-lists">
      <div className="trello-list">
        <header>{t("trello.todo")}</header>
        <ul className="trello-ul">
          <li>{t("trello.presentation")}</li>
          <li>{t("trello.article")}</li>
          <li>{t("trello.release-video-game")}</li>
          <li>{t("trello.open-source")}</li>
          <li>{t("trello.dev-ops")}</li>
        </ul>
        {addCard()}
      </div>
      <div className="trello-list">
        <header>{t("trello.wip")}</header>
        <ul className="trello-ul">
          <li>{t("trello.manage")}</li>
          <li>{t("trello.front-end")}</li>
          <li>{t("trello.back-end")}</li>
          <li>{t("trello.integration")}</li>
        </ul>
        {addCard()}
      </div>
      <div className="trello-list">
        <header>{t("trello.done")}</header>
        <ul className="trello-ul">
          <li>{t("trello.hackathon")}</li>
          <li>{t("trello.portfolio")}</li>
          <li>{t("trello.repos")}</li>
        </ul>
        {addCard()}
      </div>
    </div>
  </div>);
}

export default Trello;
