import { useRedux } from './modularRedux'
import { getComments, Comment } from 'api/githubAPI'
import { issuesDisplayStore } from './issuesDisplay'

interface CommentsState {
  comments?: Comment[]
  loading?: boolean
  error?: string
}

const initialState: CommentsState = {}

export const [useComments, {setComments}] = useRedux('comments', initialState, {
  setComments: (_, newComments) => newComments
})

issuesDisplayStore.subscribe(({ issue }) => {
  if (issue == null) setComments(initialState)
  else {
    setComments({ loading: true })
    getComments(issue.comments_url).then(
      (comments) => setComments({ comments }),
      (error) => setComments({ error }),
    )
  }
})