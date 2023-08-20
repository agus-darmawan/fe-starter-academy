import FAQData from '@/data/FAQData';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';
import FaqComponent from '@/components/shared/FaqComponent';

export default function faq() {
  return (
    <MainLayout>
      <Seo templateTitle='FAQ' />
      <div className='bg-blue-starter  min-h-screen '>
        <div className='container mx-auto w-full pt-24 lg:pt-36'>
          <h1 className='text-blue-backgraund pt-10 text-center text-2xl font-bold md:text-3xl lg:text-right lg:text-4xl'>
            Frequently Asked Question
          </h1>
          {FAQData.filter((FAQData) => FAQData.id === 'general').map(
            (filteredFaq) => (
              <div key={filteredFaq.id}>
                <FaqComponent
                  question={filteredFaq.question}
                  answer={filteredFaq.answer}
                />
              </div>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
}
