
#!/bin/bash

SCHEMAS_DIR="libs/schemas"

# List of collection names to create
SCHEMAS=(
  users
  device_tokens
  user_verification
  relationship_status_master
  user_education
  user_lifestyle
  user_interest
  user_settings
  interest_master
  lifestyle_options_master
  location_master
  app_setting_master
  faq_master
  reports_reason_masters
  payment_method_master
  block_report
  chats
  messages
  swipe
  matches
  user_locationhistory
  subscriptions
  subscription_plans_master
  profile_views
  user_preferences
  user_photos
  feedback
  activity_logs
  notifications
  language_dictionary_master
)

echo "📁 Creating schema files in $SCHEMAS_DIR..."

# Create the directory if it doesn't exist
mkdir -p $SCHEMAS_DIR

# Loop through and create files
for NAME in "${SCHEMAS[@]}"; do
  FILE_NAME="${SCHEMAS_DIR}/${NAME}.schema.ts"

  if [ ! -f "$FILE_NAME" ]; then
    echo "Creating $FILE_NAME..."

    cat <<EOL > "$FILE_NAME"
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class $(echo "$NAME" | sed -E 's/(^|_)([a-z])/\U\2/g') extends Document {
  @Prop()
  sampleField: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const $(echo "$NAME" | sed -E 's/(^|_)([a-z])/\U\2/g')Schema = SchemaFactory.createForClass($(echo "$NAME" | sed -E 's/(^|_)([a-z])/\U\2/g'));
EOL

  else
    echo "⚠️  $FILE_NAME already exists. Skipping."
  fi
done

echo "✅ Schema files generated!"

