package com.lc.df.customermanagement.service.jms;

import javax.annotation.PostConstruct;
import javax.jms.Queue;

import org.apache.activemq.command.ActiveMQQueue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.core.JmsMessagingTemplate;
import org.springframework.stereotype.Component;

@EnableJms
@Component
public class ActiveMQComponent {
	@Autowired
	private JmsMessagingTemplate jmsMessagingTemplate;

	private Queue queue;
	
	@Value("${customer.queue}")
	private String queueName;
	
	@PostConstruct
	public void queue() {
		queue = new ActiveMQQueue(queueName);
	}
	public void send(String msg) {
		System.out.println("Message sent to Active MQ  :: "+msg);
		this.jmsMessagingTemplate.convertAndSend(this.queue, msg);
	}	
	
}
