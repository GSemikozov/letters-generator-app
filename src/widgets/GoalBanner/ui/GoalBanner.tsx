import { Link } from 'react-router-dom';
import { useAppStore } from '../../../shared/lib/store';
import { Button } from '../../../shared/ui/Button';
import { ProgressIndicator } from '../../../shared/ui/ProgressIndicator';
import { Typography } from '../../../shared/ui/Typography';
import { PlusIcon } from '../../../shared/ui/icons';
import styles from './GoalBanner.module.css';

export const GoalBanner = () => {
  const { letters, goalCount } = useAppStore();
  const currentCount = letters.length;
  const isGoalReached = currentCount >= goalCount;

  if (isGoalReached) {
    return null;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.textSection}>
          <Typography variant="heading2" className={styles.title}>
            Hit your goal
          </Typography>
          <Typography variant="bodyLarge" color="secondary" className={styles.description}>
            Generate and send out couple more job applications to get hired faster
          </Typography>
          <Link to="/create">
            <Button type="button" variant="primary" size="large" className={styles.createButton}>
              <PlusIcon size={24} aria-label="Plus icon" />
              Create New
            </Button>
          </Link>
        </div>
        <div className={styles.progressSection}>
          <ProgressIndicator
            current={currentCount}
            total={goalCount}
            variant="bars"
            showText={false}
          />
          <Typography variant="bodyLarge" color="secondary" className={styles.progressText}>
            {currentCount} out of {goalCount}
          </Typography>
        </div>
      </div>
    </div>
  );
};
