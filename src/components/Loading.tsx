import loadingIcon from '../assets/loading.svg';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <img 
        src={loadingIcon}
        alt="loading"
        style={{ width: '32px', height: '32px' }}
      />
    </div>
  );
};

export default Loading;