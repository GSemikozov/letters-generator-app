import { Layout } from '../../app/ui';
import { CreateLetterForm } from '../../features/CreateLetter';
import { GoalBanner } from '../../widgets/GoalBanner';
import styles from './Form.module.css';

export const Form = () => {
  return (
    <>
      <Layout>
        <CreateLetterForm />
        <div className={styles.goalBannerContainer}>
          {/* Баннер показывается внутрь по своей логике */}
          <GoalBanner />
        </div>
      </Layout>
    </>
  );
};
