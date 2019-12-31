import React from 'react'
import { IssuesListPage } from './pages/IssuesListPage'
import { IssueDetailsPage } from './pages/IssueDetailsPage'
import { useIssuesDisplay } from 'redux/issuesDisplay'
import './App.css'

export const App: React.FC = () =>
  <div className="App">{
    useIssuesDisplay().displayType === 'issues'
      ? <IssuesListPage />
      : <IssueDetailsPage />
  }</div>
