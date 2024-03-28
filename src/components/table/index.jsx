import { useRef } from 'react';
import css from './table.module.scss';
import PropTypes from 'prop-types';

function Table(props) {

    const { columns, data, fetching } = props;
    const totalColumn = useRef(columns.length)

    const renderHeader = () => columns.map(item => <th key={item.key}>{item.title}</th>)

    const renderTableRow = (rowData) => {
        return (
            <tr key={rowData.key}>
                {columns.map(column => (
                    <td key={column.dataIndex}>{rowData[column.dataIndex]}</td>
                ))}
            </tr>
        );
    };
    const renderData = () => data.map(row => renderTableRow(row))
    const renderShowLoading = () => fetching ? '' : 'd-0';
    const renderShowEmpty = () => data.length <= 0 && !fetching ? '' : 'd-0';
    const renderShowData = () => data.length > 0 && !fetching ? '' : 'd-0';

    return (
        <div className={css.table}>
            <table>
                <thead>
                    <tr>
                        {renderHeader()}
                    </tr>
                </thead>
                <tbody className={renderShowData()}>
                    {renderData()}
                </tbody>
                <tbody className={renderShowEmpty()}>
                    <tr>
                        <td colSpan={totalColumn.current}>
                            <div className='flex items-center justify-center'>
                                Không có dữ liệu
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody className={renderShowLoading()}>
                    <tr>
                        <td colSpan={totalColumn.current}>
                            <div className='flex items-center justify-center'>
                                Đang tải dữ liệu ...
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
    fetching: PropTypes.bool
};

export default Table