import React, { FC, Fragment, useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { useFormikContext } from "formik";

import { isEmpty } from "ramda";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import { ListItem } from "react-native-elements";
import FormInput from "@app/molecules/FormInput";
import FormSwitch from "@app/molecules/FormSwitch";
import ValidationMessage from "@app/molecules/ValidationMessage";
import Button from "@app/atoms/Button";
import { ENUM } from "@app/constants";
import Icon from "@app/atoms/Icon";
import { VariationForm, VariationItem } from "@app/redux/shop/models";
import VariationModal from "./VariationModal";
import type { NewVariationProps } from "./types";
import { BtnAddStyles, NewVariationStyles, OptionCardStyles } from "./styles";

const NewVariation: FC<NewVariationProps> = (props) => {
  const { index } = props;

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  const { values, setValues } = useFormikContext<VariationForm>();

  const optionsData = values.variationData[index].options;
  const hasImage = values.variationData[index].hasImage;

  const [visible, setVisible] = useState<boolean>(false);
  const [mode, setMode] = useState<ENUM.VariationMode>(ENUM.VariationMode.Edit);

  const toggleOverlay = () => {
    setVisible((prev) => !prev);
  };

  const removeVariationItem = () => {
    const filteredVariationData: VariationItem[] = values.variationData.filter(
      (value) => value.id !== values.variationData[index].id
    );

    setValues({
      ...values.variationData,
      variationData: filteredVariationData,
    });
  };

  const removeVariationOption = (key: number) => {
    const newVariationData: VariationItem[] = [...values.variationData];

    newVariationData.forEach((item) => {
      item.options = item.options.filter(
        (option) => option.id !== optionsData[key].id
      );
    });

    setValues({
      ...values.variationData,
      variationData: newVariationData,
    });
  };

  const { btnAddContainer } = BtnAddStyles(optionsData);

  const getOptionCard = (
    key: number,
    image: string | null,
    optionName: string
  ) => {
    const { optionCard } = OptionCardStyles(image, hasImage);

    return (
      <View
        key={key}
        style={{ ...NewVariationStyles.optionCardContainer, ...optionCard }}>
        {mode === ENUM.VariationMode.Edit && (
          <View style={NewVariationStyles.deleteContainer}>
            <AntDesign
              onPress={() => removeVariationOption(key)}
              name="close"
              color={theme.colors.white}
            />
          </View>
        )}

        {image && hasImage ? (
          <>
            <Image
              source={{ uri: image as string }}
              imageStyle={NewVariationStyles.optionImage}
            />

            <View style={NewVariationStyles.optionNamePrimaryContainer}>
              <Text
                text={optionName}
                textStyle={NewVariationStyles.txtOptionPrimaryName}
              />
            </View>
          </>
        ) : (
          <View style={NewVariationStyles.optionNameSecondaryContainer}>
            <Text
              text={optionName}
              textStyle={NewVariationStyles.txtOptionSecondaryName}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <Fragment key={index}>
      <View style={NewVariationStyles.spacer} />

      <ListItem bottomDivider>
        <ListItem.Content style={NewVariationStyles.variationNameContainer}>
          <ListItem.Content style={NewVariationStyles.rowContainer}>
            <ListItem.Content>
              {mode === ENUM.VariationMode.Edit ? (
                <View style={NewVariationStyles.deleteIconContainer}>
                  <TouchableWithoutFeedback
                    onPress={removeVariationItem}
                    style={NewVariationStyles.deleteIconMargin}>
                    <Icon
                      group="products"
                      name="deleteVariation"
                      height={16}
                      width={16}
                    />
                  </TouchableWithoutFeedback>

                  <FormInput
                    name={`variationData[${index}].variationName`}
                    placeholder="Set Variation Name"
                    placeholderColor={theme.colors.dark10}
                    numberOfLines={1}
                    inputStyle={NewVariationStyles.variationNameInput}
                    inputContainerStyle={
                      NewVariationStyles.variationNameInputContainer
                    }
                  />
                </View>
              ) : (
                <Text
                  text={values.variationData[index].variationName}
                  textStyle={NewVariationStyles.lblVariationName}
                />
              )}
            </ListItem.Content>

            {mode === ENUM.VariationMode.Edit ? (
              <TouchableWithoutFeedback
                onPress={() => setMode(ENUM.VariationMode.Done)}>
                <Text
                  text="Done"
                  textStyle={NewVariationStyles.txtDoneOrEdit}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => setMode(ENUM.VariationMode.Edit)}>
                <Text
                  text="Edit"
                  textStyle={NewVariationStyles.txtDoneOrEdit}
                />
              </TouchableWithoutFeedback>
            )}
          </ListItem.Content>
          <ValidationMessage name={`variationData[${index}].variationName`} />
        </ListItem.Content>
      </ListItem>

      <ListItem bottomDivider>
        <ListItem.Content style={NewVariationStyles.columnContainer}>
          <View style={NewVariationStyles.txtSwitchContainer}>
            <View style={NewVariationStyles.columnContainer}>
              <Text
                text="Add image to variation"
                textStyle={NewVariationStyles.txtSwitch}
              />
              <Text
                text="If toggle is on, images are required."
                textStyle={NewVariationStyles.txtSubSwitch}
              />
            </View>

            <ListItem.Content style={NewVariationStyles.switchContainer}>
              <FormSwitch name={`variationData[${index}].hasImage`} />
            </ListItem.Content>
          </View>
          <ValidationMessage name={`variationData[${index}].hasImage`} />
        </ListItem.Content>
      </ListItem>

      <View style={NewVariationStyles.variationImageContainer}>
        <View style={NewVariationStyles.variationImageRowMain}>
          <View style={NewVariationStyles.variationImageSub}>
            {optionsData.length < 3 &&
              optionsData.map(({ image, optionName }, key) =>
                getOptionCard(key, image, optionName)
              )}
          </View>

          {!isEmpty(optionsData) && optionsData.length >= 3 && (
            <FlatList
              keyExtractor={keyExtractor}
              data={optionsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={NewVariationStyles.variationImageContent}
              renderItem={({ item, index: key }) =>
                getOptionCard(key, item.image, item.optionName)
              }
            />
          )}

          <Button
            title="+ Add"
            type="outline"
            onPress={toggleOverlay}
            containerStyle={btnAddContainer}
            buttonStyle={NewVariationStyles.btnAdd}
            titleStyle={NewVariationStyles.btnAddLbl}
          />
        </View>
      </View>

      <VariationModal
        index={index}
        toggleOverlay={toggleOverlay}
        setVisible={setVisible}
        visible={visible}
      />
    </Fragment>
  );
};

export default NewVariation;
