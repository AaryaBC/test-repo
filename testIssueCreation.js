// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const octokit = new Octokit({ auth: `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` });

await octokit.request('POST /repos/{owner}/{repo}/issues', {
  owner: 'AaryaBC',
  repo: 'test-repo',
  title: 'Test Issue'
})
