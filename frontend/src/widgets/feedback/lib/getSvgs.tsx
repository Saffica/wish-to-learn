import { ReactComponent as FirstSvg } from './svgs/ellipse_1.svg';
import { ReactComponent as SecondSvg } from './svgs/ellipse_2.svg';
import { ReactComponent as ThirdSvg } from './svgs/ellipse_3.svg';
import { ReactComponent as FourthSvg } from './svgs/ellipse_4.svg';
import { ReactComponent as FifthSvg } from './svgs/ellipse_5.svg';
import { ReactComponent as SixthSvg } from './svgs/ellipse_6.svg';
import { ReactComponent as SeventhSvg } from './svgs/ellipse_7.svg';
import { ReactComponent as EighthSvg } from './svgs/ellipse_8.svg';
import { ReactComponent as NinthSvg } from './svgs/ellipse_9.svg';
import { ReactComponent as TenthSvg } from './svgs/ellipse_10.svg';

interface CustomItemProps {
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const CustomItem: React.FC<CustomItemProps> = (props) => {
    const SvgComponent = props.Svg as React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    return <div><SvgComponent /></div>
};

export const getSvgs = (): JSX.Element[] => {
    return [
        <CustomItem Svg={FirstSvg} />,
        <CustomItem Svg={SecondSvg} />,
        <CustomItem Svg={ThirdSvg} />,
        <CustomItem Svg={FourthSvg} />,
        <CustomItem Svg={FifthSvg} />,
        <CustomItem Svg={SixthSvg} />,
        <CustomItem Svg={SeventhSvg} />,
        <CustomItem Svg={EighthSvg} />,
        <CustomItem Svg={NinthSvg} />,
        <CustomItem Svg={TenthSvg} />,
    ]
}