import {TrackingInfo, TtnInfoForm} from './components';
import {useTtnInfo} from './hooks';
import {CommonScreenContainer, Loader} from '../../common/components';

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
