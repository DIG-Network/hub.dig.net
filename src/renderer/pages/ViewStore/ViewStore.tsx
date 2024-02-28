import React, {useCallback, useEffect, useState} from "react";
import {BackButton, DatalayerStoreKeysTable, InvalidStoreIdErrorModal, SetStoreLabel, Spacer} from "@/components";
import {visitPage} from "@/store/slices/browser";
import {useGetOwnedStoresQuery} from "@/api/ipc/datalayer";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

const ViewStore: React.FC = () => {

  const [showInvalidStoreIdModal, setShowInvalidStoreIdModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: ownedStores } = useGetOwnedStoresQuery({});
  const fallbackStoreProvider = useSelector((state: any) => state.userOptions.fallbackStoreProvider);
  const location = useLocation();
  const storeId = location.state?.storeId;

  useEffect(() => {
    if (!storeId){
      setShowInvalidStoreIdModal(true);
    }
  }, [storeId]);

  const handleModalClose = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleViewKeyData = useCallback((key: string) => {
    if (storeId) {
      const dataPage: string = 'chia://' + storeId + '/' + key;
      dispatch(
        visitPage({
          page: { url: dataPage },
          fallbackStoreProvider,
          ownedStores,
        }),
      );
      navigate('/browser');
    }
  }, [storeId, dispatch, fallbackStoreProvider, ownedStores, navigate]);

  return (
    <>
      <div className={'flex flex-start mb-2'}>
        <BackButton/>
      </div>
      <SetStoreLabel storeId={storeId} />
      <Spacer size={10} />
      <DatalayerStoreKeysTable onViewKeyData={handleViewKeyData}/>
      <InvalidStoreIdErrorModal
        showModal={showInvalidStoreIdModal}
        setShowModal={setShowInvalidStoreIdModal}
        onClose={handleModalClose}
      />
    </>
  );
}

export { ViewStore };
