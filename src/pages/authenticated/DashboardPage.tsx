import React from 'react';
import { Button, Card } from '@/components';
import { FormattedMessage } from 'react-intl';
import { IoEye } from 'react-icons/io5';
import { RxCalendar } from 'react-icons/rx';
import { PiUsersThree } from 'react-icons/pi';

const DashboardPage: React.FC = () => {
  return (
    <div className="h-full w-full p-6 space-y-6">
      <div className="text-left text-2xl text-black font-extrabold capitalize">
        <FormattedMessage id="dashboard" />
      </div>
      <div className="lg:grid lg:grid-rows-1 lg:grid-cols-3 lg:gap-6 sm:max-lg:space-y-6">
        <Card className="relative">
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="upload" />
          </div>
          <div className="text-left text-4xl font-bold">{'123456789'}</div>
          <Button color="blue" className="absolute top-2 right-2">
            <div className="h-5 w-5">
              <IoEye className="h-full w-full" />
            </div>
          </Button>
        </Card>
        <Card className="relative">
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="recent" />
          </div>
          <div className="text-left text-4xl font-bold">{'123456789'}</div>
          <Button color="blue" className="absolute top-2 right-2">
            <div className="h-5 w-5">
              <RxCalendar className="h-full w-full" />
            </div>
          </Button>
        </Card>
        <Card className="relative">
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="deployment-interactions" />
          </div>
          <div className="text-left text-4xl font-bold">{'123456789'}</div>
          <Button color="blue" className="absolute top-2 right-2">
            <div className="h-5 w-5">
              <PiUsersThree className="h-full w-full" />
            </div>
          </Button>
        </Card>
      </div>
      <div className="grid grid-rows-1 grid-cols-2 gap-6">
        <Card>card 1</Card>
        <Card>card 2 </Card>
      </div>
    </div>
  );
};

export { DashboardPage };
