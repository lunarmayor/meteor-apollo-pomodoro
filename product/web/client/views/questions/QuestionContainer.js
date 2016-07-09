import React from 'react'
import { connect } from 'react-apollo';

const QuestionContainer = ({ questionsQuery }) => (
  <div>
    { questionsQuery.loading ?
      <div>loading</div>
    : questionsQuery.questions.length
    }
  </div>
)

const QuestionViewWithData = connect({
  mapQueriesToProps() {
    return {
      questionsQuery: {
        query: gql`
          query getQuestions {
            questions {
              body
              answer
            }
          }
        `
      }
    }
  }
})(QuestionContainer)

export default QuestionViewWithData
