import React, {useEffect} from "react";
import {Button, Table, TableBody} from "flowbite-react";
import {FormattedMessage} from "react-intl";
import {useGetOwnedStoresQuery} from "@/api/ipc/datalayer";
import {LoadingSpinnerCard} from "@/components";
//import {decodeHex} from '@/utils/hex-utils';

interface OwnedStoreSelectionTableProps {
  handleEditStore?: (storeId: string) => void;
  handleViewStore?: (storeId: string) => void;
  setTableContentsLoaded?: (loaded: boolean) => void;
}

const OwnedStoresTable: React.FC<OwnedStoreSelectionTableProps> = (props: OwnedStoreSelectionTableProps) => {

  const { data, isLoading, error, refetch} = useGetOwnedStoresQuery({});

  /** defines default functions for optional props */
  const {
    handleEditStore = () => {},
    handleViewStore = () => {},
    setTableContentsLoaded = () => {}
  } = props;

  useEffect(() => {
    if (isLoading || error){
      setTableContentsLoaded(false);
    }else{
      setTableContentsLoaded(true);
    }
  }, [setTableContentsLoaded, isLoading, error]);

  const tableContents = data?.store_ids?.map((storeId: string, index: number) => (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white truncate ...">
        {storeId}
      </Table.Cell>

      {
        props?.handleEditStore &&
        <>
          <Table.Cell key={index}>
            <a href="#"
               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
               onClick={() => handleEditStore(data.store_ids[index])}>
              <FormattedMessage id={"edit"}/>
            </a>
          </Table.Cell>
        </>
      }
      { props?.handleViewStore &&
        <>
          <Table.Cell key={index}>
            <a href="#"
               className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
               onClick={() => handleViewStore(data.store_ids[index])}>
              <FormattedMessage id={"view"}/>
            </a>
          </Table.Cell>
        </>
      }

    </Table.Row>
  ));

  const noStoresFound = (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        <FormattedMessage id={"no-stores-found"}/>
      </Table.Cell>
    </Table.Row>
  );


  if (isLoading){
    return (
      <LoadingSpinnerCard/>
    );
  }else if (error){
    return (
      <>
        <Button onClick={refetch}>
          <FormattedMessage id={"unable-to-load-stores-click-to-retry"}/>
        </Button>
      </>
    );
  }else{
    return (
      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>
              <FormattedMessage id="store-id"/>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only"/>
            </Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only"/>
            </Table.HeadCell>
          </Table.Head>
          <TableBody className="divide-y">
            { (!data?.store_ids?.length) ? <>{noStoresFound}</> : <>{tableContents}</>}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export { OwnedStoresTable };