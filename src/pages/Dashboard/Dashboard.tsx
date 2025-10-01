import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../app/ui';
import { useAppStore } from '../../shared/lib/store';
import { Button, LetterCard } from '../../shared/ui';
import { Typography } from '../../shared/ui/Typography';
import { PlusIcon } from '../../shared/ui/icons';
import { GoalBanner } from '../../widgets/GoalBanner';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const { letters, isLoading, loadLetters, deleteLetter } = useAppStore();

  useEffect(() => {
    loadLetters();
  }, [loadLetters]);

  const handleDelete = async (id: string) => {
    await deleteLetter(id);
  };

  const handleCopy = () => {};

  if (isLoading) {
    return (
      <Layout>
        <div className={styles.loading}>
          <div className={styles.loadingSpinner} />
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <div className={styles.pageHeader}>
          <Typography variant="heading1" className={styles.pageTitle}>
            Applications
          </Typography>
          <Link to="/create" className={styles.createButtonLink}>
            <Button type="button" variant="primary" className={styles.createButton}>
              <PlusIcon size={20} aria-label="Plus icon" />
              Create New
            </Button>
          </Link>
        </div>
        <>
          {letters.length > 0 && (
            <div className={styles.lettersGrid}>
              {letters.map((letter) => (
                <LetterCard
                  key={letter.id}
                  text={letter.generatedText}
                  onDelete={() => handleDelete(letter.id)}
                  onCopy={handleCopy}
                />
              ))}
            </div>
          )}
          {letters.length < 5 && <GoalBanner formRef={undefined} />}
        </>
      </Layout>
    </>
  );
};
