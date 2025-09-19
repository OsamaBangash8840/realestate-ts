import { IPropertyItems } from '@/app/base/types'
import Image from 'next/image'
interface IPropertyProps {
  property: IPropertyItems
  className?: string
}
export const PropertiesCard = ({ property }: IPropertyProps) => {
  return (
    <>
      <Image src={property.image && ''} alt="Property Img" width={100} height={100} />
    </>
  )
}
