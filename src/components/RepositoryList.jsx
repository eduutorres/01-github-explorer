import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repositoryProps = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/',
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repositoryProps} />
        <RepositoryItem repository={repositoryProps} />
        <RepositoryItem repository={repositoryProps} />
        <RepositoryItem repository={repositoryProps} />
      </ul>
    </section>
  );
}
