import React, { useState } from "react";
import { AddressSelectionProps } from "./types";
import { View } from "react-native";
import { BaseText } from "../../base-text";
import { Picker } from "@react-native-picker/picker";
import { AddressInputStyle } from "./styles";
export const AddressInputPicker: React.FC<AddressSelectionProps> = React.memo(
  ({ name, value, data, placeholder }) => {
    const [targetValue, setValue] = useState(value);
    return (
      <React.Fragment>
        <View style={AddressInputStyle.container}>
          <BaseText style={AddressInputStyle.textStyle}>{name}</BaseText>

          <Picker
            mode="dialog"
            prompt={placeholder}
            selectedValue={targetValue}
            onValueChange={(itemValue) => {
              setValue(itemValue);
            }}
            style={AddressInputStyle.picker}
          >
            {data.map((data) => (
              <Picker.Item
                value={data.value}
                key={data.id}
                label={data.value}
              />
            ))}
          </Picker>
        </View>
      </React.Fragment>
    );
  }
);
