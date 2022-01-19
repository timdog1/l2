import Icon from "@ant-design/icons";

const TwitterMainSvg = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    className="svg-hover"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="default"
      d="M33.6129 3.69238C32.3952 4.24636 31.0871 4.62067 29.7119 4.78986C31.1148 3.92745 32.1911 2.55896 32.6986 0.929961C31.3861 1.72949 29.9321 2.31042 28.3848 2.62185C27.1452 1.26834 25.3806 0.420898 23.4265 0.420898C19.6756 0.420898 16.6336 3.54415 16.6336 7.39806C16.6336 7.94306 16.6948 8.47308 16.8086 8.98514C11.1604 8.69318 6.15688 5.91579 2.80563 1.69655C2.22229 2.72965 1.88688 3.92745 1.88688 5.2031C1.88688 7.62265 3.08709 9.75921 4.90855 11.0094C3.79438 10.972 2.74729 10.6591 1.83146 10.1365V10.2264C1.83146 13.6056 4.17209 16.4249 7.28126 17.0658C6.70959 17.2245 6.11021 17.3083 5.49188 17.3083C5.05438 17.3083 4.62709 17.2664 4.21292 17.1855C5.07771 19.9554 7.58605 21.9737 10.5596 22.0276C8.23355 23.8992 5.30375 25.0146 2.12167 25.0146C1.57333 25.0146 1.03229 24.9817 0.5 24.9173C3.50709 26.8982 7.07709 28.051 10.9125 28.051C23.4104 28.051 30.2427 17.4236 30.2427 8.20657C30.2427 7.90712 30.2354 7.60468 30.2223 7.30523C31.5494 6.32004 32.7015 5.0938 33.61 3.69687L33.6129 3.69238Z"
      fill="#C5CEE0"
    />
    <path
      className="active"
      d="M33.6129 3.69238C32.3952 4.24636 31.0871 4.62067 29.7119 4.78986C31.1148 3.92745 32.1911 2.55896 32.6986 0.929961C31.3861 1.72949 29.9321 2.31042 28.3848 2.62185C27.1452 1.26834 25.3806 0.420898 23.4265 0.420898C19.6756 0.420898 16.6336 3.54415 16.6336 7.39806C16.6336 7.94306 16.6948 8.47308 16.8086 8.98514C11.1604 8.69318 6.15688 5.91579 2.80563 1.69655C2.22229 2.72965 1.88688 3.92745 1.88688 5.2031C1.88688 7.62265 3.08709 9.75921 4.90855 11.0094C3.79438 10.972 2.74729 10.6591 1.83146 10.1365V10.2264C1.83146 13.6056 4.17209 16.4249 7.28126 17.0658C6.70959 17.2245 6.11021 17.3083 5.49188 17.3083C5.05438 17.3083 4.62709 17.2664 4.21292 17.1855C5.07771 19.9554 7.58605 21.9737 10.5596 22.0276C8.23355 23.8992 5.30375 25.0146 2.12167 25.0146C1.57333 25.0146 1.03229 24.9817 0.5 24.9173C3.50709 26.8982 7.07709 28.051 10.9125 28.051C23.4104 28.051 30.2427 17.4236 30.2427 8.20657C30.2427 7.90712 30.2354 7.60468 30.2223 7.30523C31.5494 6.32004 32.7015 5.0938 33.61 3.69687L33.6129 3.69238Z"
      fill="#52CC83 "
    />
  </svg>
);

const TwitterMainIcon = (props) => (
  <Icon component={TwitterMainSvg} {...props} />
);

export default TwitterMainIcon;