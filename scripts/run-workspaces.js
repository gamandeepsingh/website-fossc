const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const workspaces = ['packages/*', 'apps/*', 'configs/*'];

const command = process.argv[2];

workspaces.forEach((workspacePattern) => {
  const workspaceDirs = glob.sync(workspacePattern);

  workspaceDirs.forEach((workspaceDir) => {
    const packageJsonPath = path.join(workspaceDir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      if (packageJson.scripts && packageJson.scripts[command]) {
        execSync(`bun run ${command}`, {
          stdio: 'inherit',
          cwd: workspaceDir,
        });
      } else {
        console.log(`Skipping ${workspaceDir}, script "${command}" not found.`);
      }
    }
  });
});
