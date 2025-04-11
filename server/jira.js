const axios = require('axios');

exports.createJiraTicket = async (comment) => {
  const jiraData = {
    fields: {
      project: { key: "DOC" },
      summary: `New comment: ${comment.substring(0, 50)}`,
      description: comment,
      issuetype: { name: "Task" }
    }
  };

  await axios.post('https://your-domain.atlassian.net/rest/api/2/issue', jiraData, {
    auth: {
      username: process.env.JIRA_USER,
      password: process.env.JIRA_API_TOKEN
    },
    headers: { 'Content-Type': 'application/json' }
  });
};