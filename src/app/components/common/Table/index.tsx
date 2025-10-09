import React from 'react'

export interface TableColumn<T> {
  key: keyof T
  header: string
  render?: (item: T, index: number) => React.ReactNode
}

interface ReusableTableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey: (item: T, index: number) => string | number
  expandedRowRender?: (item: T, index: number) => React.ReactNode // ✅ optional
}

export function Table<T>({ columns, data, rowKey, expandedRowRender }: ReusableTableProps<T>) {
  return (
    <div className="noScrollbar overflow-x-auto w-full">
      <table className="min-w-full text-[13px] text-left whitespace-nowrap">
        <thead className="text-secondary/70 bg-gray-100">
          <tr>
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="py-3 px-4 font-bold text-sm text-textPrimaryBody whitespace-nowrap"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const expandedContent = expandedRowRender?.(item, index)
            return (
              <React.Fragment key={rowKey(item, index)}>
                {/* Normal row */}
                <tr className="border-b last:border-b-0 whitespace-nowrap bg-bgPrimary border-gray-200 dark:border-gray-100 hover:bg-gray-50 dark:hover:bg-bgSecondary transition">
                  {columns.map((col, idx) => (
                    <td
                      key={idx}
                      className="px-4 py-6 text-secondary/70 text-nowrap whitespace-nowrap font-inter"
                    >
                      {col.render ? col.render(item, index) : (item[col.key] as React.ReactNode)}
                    </td>
                  ))}
                </tr>

                {/* Expanded row if present */}
                {expandedContent && (
                  <tr className="bg-gray-50 dark:bg-bgPrimary">
                    <td colSpan={columns.length} className="px-4 py-3">
                      {expandedContent}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
