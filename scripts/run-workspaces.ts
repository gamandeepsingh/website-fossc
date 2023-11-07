import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import glob from 'glob';

const workspaces = ['packages/*', 'apps/*', 'configs/*', 'scripts/*'];

const command = process.argv[2];

workspaces.forEach((workspacePattern) => {
  const workspaceDirs = glob.sync(workspacePattern);

  workspaceDirs.forEach((workspaceDir: any) => {
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
