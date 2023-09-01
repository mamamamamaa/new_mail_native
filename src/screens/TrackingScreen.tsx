import {useTtnInfo} from '../hooks';
import {
  Loader,
  TrackingInfo,
  TtnInfoForm,
  CommonScreenContainer,
} from '../components';

export const TrackingScreen = () => {
  const {ttnInfo, loading, ...inputProps} = useTtnInfo();
  // 20450766702783
  // 20450764514911

  return (
    <CommonScreenContainer>
      <Loader visible={loading} />

      <TtnInfoForm {...inputProps} />

      {ttnInfo && <TrackingInfo ttnInfo={ttnInfo} />}
    </CommonScreenContainer>
  );
};
