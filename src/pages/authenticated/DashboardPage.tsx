import React from 'react';
import { Button, Card, StorageDoughnut } from '@/components';
import { FormattedMessage } from 'react-intl';
import { IoEye } from 'react-icons/io5';
import { RxCalendar } from 'react-icons/rx';
import { PiUsersThree } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/routes';
import { FaRegFolderOpen } from 'react-icons/fa6';

const DashboardPage: React.FC = () => {
  const dummyFolderData = () => {
    const folders: { deploymentId: string; folderName: string }[] = [];
    for (let i = 0; i < 8; i++) {
      folders.push({ deploymentId: 'sdlkfhlskadjhg', folderName: `folder ${i}` });
    }
    return folders;
  };

  const deployments = dummyFolderData();

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
          <Button color="cyan" className="absolute top-2 right-2">
            <IoEye className="h-5 w-5" />
          </Button>
        </Card>
        <Card className="relative">
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="recent" />
          </div>
          <div className="text-left text-4xl font-bold">{'123456789'}</div>
          <Button color="cyan" className="absolute top-2 right-2">
            <RxCalendar className="h-5 w-5" />
          </Button>
        </Card>
        <Card className="relative">
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="deployment-interactions" />
          </div>
          <div className="text-left text-4xl font-bold">{'123456789'}</div>
          <Button color="cyan" className="absolute top-2 right-2">
            <PiUsersThree className="h-5 w-5" />
          </Button>
        </Card>
      </div>
      <div className="xl:grid xl:grid-rows-1 xl:grid-cols-2 xl:gap-6 sm:max-xl:space-y-6">
        <Card>
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="my-deployments" />
          </div>
          <div className="flex flex-wrap">
            {deployments.map((deployment) => {
              return (
                <div
                  key={deployment.folderName}
                  className="w-fit p-4 hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-purple-500"
                >
                  <FaRegFolderOpen className="w-32 h-32 fill-purple-500 hover:fill-purple-600" />
                  <p className="capitalize">{deployment.folderName}</p>
                </div>
              );
            })}
          </div>
          <div className="w-fit capitalize text-left font-medium underline underline-offset-4 decoration-2 decoration-purple-500 hover:decoration-4 hover:decoration-purple-500">
            <Link to={ROUTES.DEPLOYMENTS}>
              <FormattedMessage id="see-all" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="text-left text-lg font-bold capitalize">
            <FormattedMessage id="storage" />
          </div>
          <div className="h-full flex justify-center items-center">
            <div className="h-72 w-72">
              <StorageDoughnut />
            </div>
          </div>
          <div className="w-fit capitalize text-left font-medium underline underline-offset-4 decoration-2 decoration-purple-500 hover:decoration-4 hover:decoration-purple-500">
            <Link to={ROUTES.STORAGE}>
              <FormattedMessage id="see-all" />
            </Link>
          </div>
        </Card>
      </div>
      <div className="pb-6" />
    </div>
  );
};

export { DashboardPage };
