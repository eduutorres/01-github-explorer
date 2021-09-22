import { useEffect, useState } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

const repositoryProps = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/',
};

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(reponse => reponse.json())
      .then(data => setRepositories(data));
  }, []);

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
