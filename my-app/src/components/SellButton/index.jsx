import React from "react";
import { Button, Modal, Form, Input, Radio } from "antd";
import { database } from "../../base";
const FormItem = Form.Item;

const SellForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator("title", {
                rules: [
                  {
                    required: true,
                    message: "Please input the title of collection!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator("description")(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Price">
              {getFieldDecorator("price")(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export class SellButton extends React.Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({ visible: true });
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      const sellAdsRef = database.ref("sellAds");
      const result = sellAdsRef.push({
        title: values.title,
        description: values.description,
        price: values.price
      });

      form.resetFields();
      this.setState({ visible: false });
    });
  };
  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Sell
        </Button>
        <SellForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}
