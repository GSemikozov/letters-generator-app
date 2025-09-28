import { useRef } from 'react';
import { Layout } from '../../app/ui';
import { CreateLetterForm, type CreateLetterFormRef } from '../../features/CreateLetter';
import { GoalBanner } from '../../widgets/GoalBanner';
import styles from './Form.module.css';

export const Form = () => {
  const formRef = useRef<CreateLetterFormRef>(null);

  return (
    <>
      <Layout>
        <CreateLetterForm ref={formRef} />
        <div className={styles.goalBannerContainer}>
          <GoalBanner formRef={formRef as React.RefObject<CreateLetterFormRef>} />
        </div>
      </Layout>
    </>
  );
};
