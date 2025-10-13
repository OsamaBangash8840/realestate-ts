import { Table, TableColumn } from '../../common/Table'
import { Button, Typography } from '../../common'
import { StatusColors } from '@/app/base/helpers'
import Image from 'next/image'

const bookings = [
  {
    ID: 'ID-001',
    jobTitle: 'Oct 26, 2023 | 11:33 AM',
    image: '/dashboard/Avatar.svg',
    candidateName: '#ORD-12345',
    money: '249.00 ',
    email: 'ziar@gmail.com ',
    jobsApplied: '22',
    jobAppliedDate: '23 June, 2025',
    status: 'Shipped',
    action: '',
  },
  {
    ID: 'ID-002',
    jobTitle: 'Oct 26, 2023 | 11:33 AM',
    image: '/dashboard/Avatar.svg',
    candidateName: '#ORD-12345',
    money: '249.00 ',
    email: 'ziar@gmail.com ',
    jobsApplied: '22',
    jobAppliedDate: '23 June, 2025',
    status: 'Cancelled',
    action: '',
  },
  {
    ID: 'ID-003',
    jobTitle: 'Oct 26, 2023 | 11:33 AM',
    image: '/dashboard/Avatar.svg',
    candidateName: '#ORD-12345',
    money: '249.00 ',
    email: 'ziar@gmail.com ',
    jobsApplied: '22',
    jobAppliedDate: '23 June, 2025',
    status: 'Processing',
    action: '',
  },
  {
    ID: 'ID-004',
    jobTitle: 'Oct 26, 2023 | 11:33 AM',
    image: '/dashboard/Avatar.svg',
    candidateName: '#ORD-12345',
    money: '249.00 ',
    email: 'ziar@gmail.com ',
    jobsApplied: '22',
    jobAppliedDate: '23 June, 2025',
    status: 'Cancelled',
    action: '',
  },
  {
    ID: 'ID-005',
    jobTitle: 'Oct 26, 2023 | 11:33 AM',
    image: '/dashboard/Avatar.svg',
    candidateName: '#ORD-12345',
    money: '249.00 ',
    email: 'ziar@gmail.com ',
    jobsApplied: '22',
    jobAppliedDate: '23 June, 2025',
    status: 'Processing',
    action: '',
  },
]
export const OrderHistoryTable = () => {
  const companiesColumns: TableColumn<(typeof bookings)[0]>[] = [
    {
      key: 'candidateName',
      header: 'Order No',
      render: (id) => {
        return (
          <div className="flex items-center gap-2">
            <Typography variant="medium" weight="regular">
              {id.candidateName}
            </Typography>
          </div>
        )
      },
    },
    {
      key: 'jobTitle',
      header: 'Date',
      render: (id) => {
        return (
          <Typography variant="medium" weight="regular" className="text-gray-900 font-inter">
            {id.jobTitle}
          </Typography>
        )
      },
    },
    {
      key: 'status',
      header: 'Status',
      render: (booking) => (
        <span
          className={`inline-flex gap-2 items-center text-xs px-2 font-medium py-1 rounded-md `}
          style={{
            color: StatusColors[booking.status].color,
            backgroundColor: StatusColors[booking.status].bg,
          }}
        >
          {booking.status}
        </span>
      ),
    },
    {
      key: 'money',
      header: 'Total',
      render: (id) => {
        return (
          <div className="flex gap-1 items-center">
            <Image
              src={'/home/new_currency.svg'}
              alt="Currency Img"
              className="w-4 h-4"
              width={43}
              height={43}
            />
            <Typography variant="medium" weight="bold" className="text-textPrimary font-inter">
              {id.money}
            </Typography>
          </div>
        )
      },
    },
    {
      key: 'jobsApplied',
      header: 'Action',
      render: () => {
        return (
          <div className="flex gap-1 items-center">
            <Button title="View" className="text-sm " variant="primary" />
            <Button title="Reorder" className="text-sm " variant="primary" />
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Table columns={companiesColumns} data={[...bookings]} rowKey={(_, i) => i} />
    </>
  )
}
