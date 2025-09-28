import { Link } from 'react-router-dom';
import { useAppStore } from '../../../shared/lib/store';
import { Button } from '../../../shared/ui/Button';
import { Container } from '../../../shared/ui/Container';
import { Logo } from '../../../shared/ui/Logo';
import { ProgressIndicator } from '../../../shared/ui/ProgressIndicator';
import { Typography } from '../../../shared/ui/Typography';
import { HomeIcon } from '../../../shared/ui/icons';
import styles from './Header.module.css';

export const Header = () => {
  const { letters, goalCount } = useAppStore();
  const currentCount = letters.length;

  return (
    <header className={styles.header}>
      <Container size="xl">
        <div className={styles.headerContent}>
          <div className={styles.left}>
            <Link to="/" className={styles.logo}>
              <Logo size="medium" showText={true} />
            </Link>
          </div>

          <div className={styles.right}>
            <div className={styles.progressSection}>
              <Typography variant="bodyLarge" color="secondary" className={styles.progressText}>
                {currentCount}/{goalCount} applications generated
              </Typography>
              <ProgressIndicator
                current={currentCount}
                total={goalCount}
                variant="dots"
                showText={false}
              />
            </div>
            <Link to="/" className={styles.homeButton} aria-label="Home">
              <Button type="button" variant="icon" size="medium">
                <HomeIcon size={20} aria-label="Home icon" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
