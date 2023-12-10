import { Modal } from "antd"

export const modal = {
  loading: (text: string, onOk?: () => void) =>
    Modal.success({
      content: (
        <div className="bg-gray-900 p-6 rounded-xl text-white">
          <h6>loading...</h6>
          <p>{text}</p>
        </div>
      ),
      centered: true,
      icon: <></>,
      width: 600,
      onOk,
    }),
  success: (text: string, onOk?: () => void) =>
    Modal.success({
      content: (
        <div className="bg-gray-900 p-6 rounded-xl text-white">
          <h6>Successfully</h6>
          <p>{text}</p>
        </div>
      ),
      centered: true,
      icon: <></>,
      width: 600,
      onOk,
      maskClosable: true,
    }),
  error: (text: string, onOk?: () => void) =>
    Modal.success({
      content: (
        <div className="bg-gray-900 p-6 rounded-xl text-white">
          <h6>Failure</h6>
          <p>{text}</p>
        </div>
      ),
      centered: true,
      icon: <></>,
      width: 600,
      onOk,
      maskClosable: true,
    }),
}
