import {useTtnInfo} from '../hooks';
import {
  Loader,
  TrackingInfo,
  TtnInfoForm,
  CommonScreenContainer,
} from '../components';

export const TrackingScreen = () => {
  const {ttnInfo, loading, ...formProps} = useTtnInfo();

  return (
    <CommonScreenContainer>
      <Loader visible={loading} />

      <TtnInfoForm {...formProps} />

      {ttnInfo && <TrackingInfo ttnInfo={ttnInfo} />}
    </CommonScreenContainer>
  );
};
