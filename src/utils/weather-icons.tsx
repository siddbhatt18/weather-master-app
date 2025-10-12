import { cn } from "@/lib/utils";

const IconWrapper: React.FC<React.SVGProps<SVGSVGElement>> = ({ children, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className={cn("w-full h-full", className)}
    {...props}
  >
    {children}
  </svg>
);

const animate = (animation: string) => <style>{`@keyframes ${animation}`}</style>;

export const IconSun = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    {animate('spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }')}
    <g style={{ transformOrigin: 'center', animation: 'spin 20s linear infinite' }}>
      <path d="M32 18.7V6.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M40.2 23.8l8.8-8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M45.3 32H57.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M40.2 40.2l8.8 8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M32 45.3V57.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M23.8 40.2l-8.8 8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M18.7 32H6.3" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
      <path d="M23.8 23.8l-8.8-8.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" />
    </g>
    <circle cx="32" cy="32" r="9" fill="currentColor" />
  </IconWrapper>
);

export const IconMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    <path d="M43.6,33.1c-1.3,0-2.6-0.1-3.9-0.4c-1-0.2-2-0.5-2.9-0.9c-2.4-1-4.3-2.9-5.3-5.3c-0.4-0.9-0.7-1.9-0.9-2.9 c-0.2-1.3-0.4-2.6-0.4-3.9c0-2.3,0.5-4.5,1.4-6.6c-4.4,1.4-7.8,4.8-9.2,9.2c-1.4,4.4,0,9.3,3.8,12.1c2.9,2.1,6.5,2.6,9.8,1.4 C41.1,36.6,43.2,35,43.6,33.1z" fill="currentColor" />
  </IconWrapper>
);

export const IconCloud = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    {animate('float { 0%, 100% { transform: translateY(-2px); } 50% { transform: translateY(2px); } }')}
    <g style={{ animation: 'float 4s ease-in-out infinite' }}>
      <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
    </g>
  </IconWrapper>
);

export const IconCloudRain = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    {animate('rain { 0% { transform: translateY(-3px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(8px); opacity: 0; } }')}
    <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
    <g>
      <path d="M26.8,49.5l-2.4,5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" style={{ animation: 'rain 1.5s linear infinite', animationDelay: '0s' }} />
      <path d="M34.8,49.5l-2.4,5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" style={{ animation: 'rain 1.5s linear infinite', animationDelay: '0.5s' }} />
      <path d="M42.8,49.5l-2.4,5.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" style={{ animation: 'rain 1.5s linear infinite', animationDelay: '1s' }} />
    </g>
  </IconWrapper>
);

export const IconCloudSnow = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    {animate('snow { 0% { transform: translateY(-3px) rotate(0deg); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(8px) rotate(360deg); opacity: 0; } }')}
    <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
    <g>
        <circle cx="26.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'snow 2s linear infinite', animationDelay: '0s' }} />
        <circle cx="34.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'snow 2s linear infinite', animationDelay: '0.8s' }} />
        <circle cx="42.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'snow 2s linear infinite', animationDelay: '1.6s' }} />
    </g>
  </IconWrapper>
);

export const IconCloudLightning = (props: React.SVGProps<SVGSVGElement>) => (
  <IconWrapper {...props}>
    {animate('flash { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }')}
    <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
    <polygon points="34.8,43.6 28.8,51.6 34.8,51.6 32.8,57.6" fill="currentColor" style={{ animation: 'flash 1s linear infinite' }} />
  </IconWrapper>
);

export const IconCloudFog = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        {animate('fog { 0% { transform: translateX(-10px); opacity: 0; } 50% { transform: translateX(0); opacity: 0.8; } 100% { transform: translateX(10px); opacity: 0; } }')}
        <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
        <g>
            <path d="M12 48h40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" style={{ animation: 'fog 3s ease-in-out infinite' }}/>
            <path d="M16 54h32" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" style={{ animation: 'fog 3s ease-in-out infinite', animationDelay: '1.5s' }}/>
        </g>
    </IconWrapper>
);

export const IconCloudHail = (props: React.SVGProps<SVGSVGElement>) => (
    <IconWrapper {...props}>
        {animate('hail { 0% { transform: translateY(-3px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(8px); opacity: 0; } }')}
        <path d="M47.7,35.4c0,4.6-3.7,8.2-8.2,8.2h-21C14,43.6,10.2,39.9,10.2,35.3c0-4.5,3.5-8.1,8-8.2c1.4-5.4,6.3-9.4,12-9.4 c5,0,9.4,3,11.4,7.4C45.3,25.4,47.7,28.2,47.7,35.4z" fill="currentColor" />
        <g>
            <circle cx="26.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'hail 1s ease-out infinite', animationDelay: '0s' }} />
            <circle cx="34.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'hail 1s ease-out infinite', animationDelay: '0.4s' }} />
            <circle cx="42.8" cy="49.5" r="1.5" fill="currentColor" style={{ animation: 'hail 1s ease-out infinite', animationDelay: '0.8s' }} />
        </g>
    </IconWrapper>
);
