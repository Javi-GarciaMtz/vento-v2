import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'vento-mails';

  public options_tiny = {
    menubar: true,
    block_unsupported_drop: true,
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount', 'image','lists','media','lists advlist', 'directionality'
    ],
    toolbar:
        'undo redo | formatselect fontselect| bold italic |\
        fontsizeselect | underline strikethrough forecolor backcolor |  image media | removeformat |\
        alignleft aligncenter alignright alignjustify |  \
        bullist numlist outdent indent | help |'

  };
}
